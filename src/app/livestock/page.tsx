import Image from "next/image";

import { Button } from "@/components/ui/button"
import { Inter } from "next/font/google";
import Link from "next/link";
import PerbaruiButton from '@/components/ui/PerbaruiButton/PerbaruiButton';
import PhaseLabelButton from "@/components/ui/PhaseLabel/PhaseLabelButton";

export default function OnBoarding() {
  return (
    <div>
        <PerbaruiButton label={"Perbarui"}/>
        <PhaseLabelButton phases={[]}/>
      
    </div>
  );
}

