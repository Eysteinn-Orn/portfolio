import Hero from "@/components/hero";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import TogglableMarquee from "@/components/ui/togglable-marquee"; // Import the new component

const libraries = [
  "Git",
  "React",
  "Next.js",
  "Tailwind CSS",
  "TypeScript",
  "Power Platform",
  "Azure",
  "C#",
  "PostgreSQL",
  "Godot",
];

export default function AboutPage() {
  return (
    <main className="my-6 flex flex-col container mx-auto px-2rem md:w-[1100px]">
      <Hero
        name="Eysteinn Örn Jónsson"
        jobTitle="Tölvunarfræðingur"
        description="Ástríðan mín felst í vefþróun, leikjahönnun og stafrænum lausnum. Ég nýt þess að vinna með öðrum og læra á nýjustu tækni til að búa til notendavænar lausnir."
        githubUrl="https://github.com/eysteinn-orn"
        blueskyUrl="https://bsky.app/profile/eysteinn.bsky.social"
        imageUrl="/notion-face.png"
      />
      <div className="space-y-6 container mx-auto px-2rem">
        <Card className="bg-secondary-background text-foreground">
          <CardHeader>
            <CardTitle
              className="text font-heading text-foreground sm:text-4xl md:text-3xl"
            >
              Aðeins um mig
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground">

              Ég er forritari með brennandi áhuga á vefþróun, leikjahönnun og stafrænum lausnum. Ég er endalaust að hugsa um hvernig ég get nýtt mína tæknikunnáttu til að búa til notendavænar lausnir sem gera líf fólks auðveldara og skemmtilegra.

              <br />
              <br />
              
              Eins og stendur er ég að starfa sem forritari hjá CPS Ráðgjöf að smíða Travel Agent vöruna, bakenda kerfi fyrir ferðaskrifstofur.
              Þar stuðla ég að þróa og hanna API endapunkta, halda utanum hýsingum á Azure og laga villur sem koma upp.

              <br />
              <br />

              Áður fékk ég tækifæri til að vinna rannsóknarverkefni hjá Mál- og raddtæknistofu Háskóla Reykjavíkur þar sem ég tók þátt í að þjálfa gervigreind til að svara spurningum á íslensku. 
              Svo var lokaverkefnið mitt um viðhorfsgreiningu á íslenskum ummælum með gervigreind, þar sem við þróuðum forrit sem greindi viðhorf fólks út frá texta í ummælunum.

              <br />
              <br />

              Fyrir utan vinnu er ég venjulega að labba með hundinn, spila tölvuleiki, lesa, elda, mæta í ræktina eða skipuleggja næsta Drekar og Dýfflissu hittinginn. Einnig nýt ég þess að læra á nýja tækni eða vinna í einhverju verkefni sem tengist vefforritun eða leikjahönnun.
            </p>
            {/* You can add more detailed paragraphs, lists, or other content here */}
          </CardContent>
        </Card>

        <TogglableMarquee items={libraries} title="Tæknikunnátta" />
      </div>
    </main>
  );
}