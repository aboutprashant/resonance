import { WavyBackground } from "@/components/ui/wavy-background";

export function HeroPattern() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden hidden-overflow lg:block">
      <WavyBackground
        containerClassName="h-full"
        className="hidden"
        colors={["#2DD4BF", "#22D3EE", "#38BDF8", "#818CF8"]}
        waveWidth={60}
        waveOpacity={0.1}
        waveYOffset={250}
        blur={3}
        speed="slow"
        backgroundFill="hsl(0 0% 100%)"
      />
    </div>
  );
}