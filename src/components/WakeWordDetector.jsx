import { useState, useEffect, useRef } from 'react';
import { t } from '../translations';
import './WakeWordDetector.css';

const WAKE_WORDS = ['sita', 'hey sita', 'sita ai', 'seeta', 'hey seeta'];

function WakeWordDetector({ onWakeWordDetected, language = 'en' }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const recognitionRef = useRef(null);
  const enabledRef = useRef(false);

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const supported = !!SpeechRecognition;

  useEffect(() => {
    return () => stopRecognition();
  }, []);

  const startRecognition = () => {
    if (!SpeechRecognition) return;

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-IN';
    recognitionRef.current = recognition;

    recognition.onresult = (event) => {
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript.toLowerCase().trim();
        const matched = WAKE_WORDS.some(w => transcript.includes(w));
        if (matched) {
          console.log('Wake word detected:', transcript);
          setIsListening(true);
          if (onWakeWordDetected) onWakeWordDetected(0, 'Sita AI');
          setTimeout(() => setIsListening(false), 2000);
        }
      }
    };

    recognition.onend = () => {
      // Auto-restart if still enabled
      if (enabledRef.current) {
        try { recognition.start(); } catch (_) {}
      }
    };

    recognition.onerror = (e) => {
      if (e.error === 'not-allowed') {
        console.warn('Microphone permission denied for wake word');
        setIsEnabled(false);
        enabledRef.current = false;
      }
    };

    try { recognition.start(); } catch (_) {}
  };

  const stopRecognition = () => {
    if (recognitionRef.current) {
      try { recognitionRef.current.stop(); } catch (_) {}
      recognitionRef.current = null;
    }
  };

  const toggle = () => {
    if (!supported) return;

    if (isEnabled) {
      enabledRef.current = false;
      stopRecognition();
      setIsEnabled(false);
      setIsFadingOut(false);
    } else {
      enabledRef.current = true;
      startRecognition();
      setIsEnabled(true);
      setTimeout(() => setIsFadingOut(true), 1500);
    }
  };

  if (!supported) return null;

  return (
    <div className={`wake-word-detector ${isFadingOut ? 'fade-out' : ''}`}>
      <div className="wake-word-header">
        <div className="wake-word-info">
          <span className="wake-word-icon">🎤</span>
          <div className="wake-word-text">
            <h3>{t('voice_activation', language)}</h3>
            <p>{t('say_to_activate', language)}</p>
          </div>
        </div>
        <button
          className={`wake-word-toggle ${isEnabled ? 'active' : ''}`}
          onClick={toggle}
        >
          {isEnabled ? t('on', language) : t('off', language)}
        </button>
      </div>

      {isListening && (
        <div className="wake-word-listening">
          <div className="pulse-animation"></div>
          <span>{t('wake_detected', language)}</span>
        </div>
      )}

      {isEnabled && !isListening && (
        <div className="wake-word-status">
          <div className="status-indicator active"></div>
          <span>{t('listening_for', language)}</span>
        </div>
      )}
    </div>
  );
}

export default WakeWordDetector;
