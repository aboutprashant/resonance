export interface QuickAction {
    title: string;
    description: string;
    gradient: string;
    href: string;
}

export const quickActions: QuickAction[] = [
    {
      title: "Tell a bedtime story",
      description: "Generate a soothing bedtime narration",
      gradient: "bg-linear-185 from-[#A18CD1] via-[#FBC2EB] to-[#FDEB71]",
      href: "/text-to-speech?=Once upon a time, under a sky full of shimmering stars, a little fox set out on a quiet adventure through the forest, guided only by the soft glow of fireflies and the whispers of the night.",
    },
    {
      title: "Motivational speech",
      description: "Turn words into an inspiring voice",
      gradient: "bg-linear-185 from-[#F7971E] via-[#FFD200] to-[#FFF8E1]",
      href: "/text-to-speech?=You are closer than you think. Every step you take, no matter how small, is shaping a stronger, braver version of yourself. Keep going—your future is watching.",
    },
    {
      title: "YouTube voiceover",
      description: "Create narration for your video",
      gradient: "bg-linear-185 from-[#43CEA2] via-[#185A9D] to-[#D5EFFF]",
      href: "/text-to-speech?=In today’s video, we’re diving into five simple habits that can completely transform your productivity and help you get more done without burning out.",
    },
    {
      title: "Ad script voice",
      description: "Convert a product pitch into audio",
      gradient: "bg-linear-185 from-[#FF6A88] via-[#FF99AC] to-[#FFEFEF]",
      href: "/text-to-speech?=Introducing the all-new SmartBottle—your perfect hydration partner that tracks your water intake, reminds you to drink, and keeps you energized throughout the day.",
    },
    {
      title: "Podcast intro",
      description: "Generate a catchy podcast opening",
      gradient: "bg-linear-185 from-[#667EEA] via-[#764BA2] to-[#E0C3FC]",
      href: "/text-to-speech?=Welcome back to The Deep Dive, the podcast where we explore ideas, stories, and insights that shape the way we think and live.",
    },
    {
      title: "Meditation guide",
      description: "Create a calming guided meditation",
      gradient: "bg-linear-185 from-[#89F7FE] via-[#66A6FF] to-[#E0F7FF]",
      href: "/text-to-speech?=Close your eyes, take a deep breath in, and slowly exhale. Let go of the noise around you and allow your mind to settle into a place of calm and stillness.",
    },
  ];