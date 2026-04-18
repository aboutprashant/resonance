"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { TEXT_MAX_LENGTH } from "@/features/text-to-speech/data/constants";
import { Coins } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function TextInputPanel() {
    const [text, setText] = useState("");
    const router = useRouter();
    const handleGenerate = () => {
      const trimmedText = text.trim();
      if (trimmedText.length === 0) {
        return;
      }
      router.push(`/text-to-speech?text=${encodeURIComponent(trimmedText)}`); 
    }
    return (
        <div className="rounded-[22px] bg-linear-185 from-[#FF9EE3] from-15% via-[#57D7E0] via-39% to-[#DBF1F2] to-85% p-0.5 shadow-[0_0_0_4px_white]">
            <div className="rounded-[20px] bg-[#F9F9F9] p-1">
                <div className="space-y-4 rounded-2xl bg-white p-4 drop-shadow-xs">
                    <Textarea
                        value={text}
                        className="min-h-35 resize-none border-0 bg-transparent p-0 shadow-none focus-visible:ring-0"
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Start typing or paste your text here..."
                        maxLength={TEXT_MAX_LENGTH}  
                    />
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="gap-1.5 border-dashed">
                        <Coins className="size-4 text-chart-5" />
                        <span className="text-xs font-medium">
                          {text.length === 0 ? (
                            "Start typing to estimate cost"
                          ) : (
                            <>
                            <span className="tabular-nums">
                              ${(text.length * 0.0003).toFixed(4)}
                            </span>{" "}estimated
                            </>
                          )}
                        </span>
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                          {text.length.toLocaleString()} / {TEXT_MAX_LENGTH.toLocaleString()}
                      </span>
                    </div> 
                </div>
                <div className="flex items-center justify-end p-3">
                    <Button size="sm" className="w-full lg:w-auto" disabled={!text.trim()} onClick={handleGenerate}>
                      Generate
                    </Button>
                </div>
            </div>
        </div>
    );
}
