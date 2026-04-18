import { TextToSpeechLayout as TextToSpeechLayoutComponent } from "@/features/text-to-speech/views/text-to-speech-layout";

export default function TextToSpeechLayout({ children }: { children: React.ReactNode }) {
  return (
    <TextToSpeechLayoutComponent>
      {children}
    </TextToSpeechLayoutComponent>
  );
}