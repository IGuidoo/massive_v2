import React from 'react'

import Title from "@/components/ui/typography/title";
import { Heading, Paragraph } from "@/components/ui/typography/typography";
import { SectionOneSvg } from "../_assets";
import Image from 'next/image';

const SectionOne = () => {
  return (
    <div className="relative h-full pt-10 lg:pt-[250px] mb-[140px]">
        <Image src={'/home/grand-mark-pattern-background.png'} className="absolute top-0 left-0 w-full -z-10" width={1920} height={543} alt='grand mark pattern background' />
        
        <SectionOneSvg className='mx-auto' />
        <Title className="max-w-[685px] mx-auto text-center mt-10">
          <Heading level="h2" size='4xl' colorSchemeHighlight='gradient-primary' highlight="zakelijke ambities" >{SECTION_ONE.heading}</Heading>
          <Paragraph>{SECTION_ONE.paragraph}</Paragraph>
        </Title>
    </div>
  )
}

const SECTION_ONE = {
  heading: "Wij transformeren uw zakelijke ambities in werkelijkheid",
  paragraph: "Meer dan een gewoon digital marketingbureau, zijn wij de architecten van uw digitale toekomst. Onze toewijding? Uw zakelijke groei versterken. Dit doen we door innovatieve, op maat gemaakte oplossingen. En altijd met open, transparante samenwerking.",
}

export default SectionOne