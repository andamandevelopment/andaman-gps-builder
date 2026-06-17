import { Link, createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Andaman Tracking" },
      {
        name: "description",
        content:
          "นโยบายความเป็นส่วนตัวของ Andaman Tracking เกี่ยวกับการเก็บ ใช้ และเปิดเผยข้อมูลส่วนบุคคล",
      },
      { property: "og:title", content: "Privacy Policy | Andaman Tracking" },
      {
        property: "og:description",
        content:
          "อ่านนโยบายความเป็นส่วนตัวของ Andaman Tracking ทั้งภาษาไทยและภาษาอังกฤษ",
      },
    ],
  }),
  component: PrivacyPolicyPage,
});

function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-3xl border border-border bg-white p-6 shadow-card sm:p-8">
      <h2 className="text-xl font-bold text-primary sm:text-2xl">{title}</h2>
      <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
        {children}
      </div>
    </section>
  );
}

function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-surface text-foreground">
      <header className="bg-gradient-brand text-white">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-orange-soft">
            Privacy Policy
          </p>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight sm:text-5xl">
            นโยบายความเป็นส่วนตัว
          </h1>
          <p className="mt-4 max-w-3xl text-sm text-white/85 sm:text-base">
            เอกสารนี้อธิบายนโยบายและขั้นตอนในการเก็บ ใช้ และเปิดเผยข้อมูลของผู้ใช้งาน
            รวมถึงสิทธิด้านความเป็นส่วนตัวที่คุณได้รับตามกฎหมาย
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/"
              className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              กลับสู่หน้าแรก
            </Link>
            <Link
              to="/business-policy"
              className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              นโยบายทางธุรกิจ
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl space-y-6 px-6 py-10 sm:space-y-8 sm:py-12">
        <Section title="นโยบายความเป็นส่วนตัว (ภาษาไทย)">
          <p>
            นโยบายความเป็นส่วนตัวฉบับนี้อธิบายนโยบายและขั้นตอนของเราเกี่ยวกับการเก็บรวบรวม
            การใช้งาน และการเปิดเผยข้อมูลของคุณเมื่อคุณใช้บริการ
            รวมถึงแจ้งให้คุณทราบถึงสิทธิด้านความเป็นส่วนตัวและวิธีที่กฎหมายคุ้มครองคุณ
          </p>
          <p>
            เราใช้ข้อมูลส่วนบุคคลของคุณเพื่อให้บริการและพัฒนาบริการให้ดียิ่งขึ้น
            เมื่อคุณใช้บริการ ถือว่าคุณยินยอมต่อการเก็บและการใช้ข้อมูลตามนโยบายความเป็นส่วนตัวนี้
          </p>
        </Section>

        <Section title="การตีความและคำจำกัดความ">
          <h3 className="text-base font-semibold text-foreground sm:text-lg">การตีความ</h3>
          <p>
            คำที่ขึ้นต้นด้วยตัวพิมพ์ใหญ่มีความหมายตามเงื่อนไขที่กำหนดไว้ด้านล่าง
            โดยคำจำกัดความเหล่านี้มีความหมายเหมือนกันไม่ว่าจะอยู่ในรูปเอกพจน์หรือพหูพจน์
          </p>
          <h3 className="pt-2 text-base font-semibold text-foreground sm:text-lg">คำจำกัดความ</h3>
          <p>เพื่อวัตถุประสงค์ของนโยบายความเป็นส่วนตัวนี้:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>บัญชีผู้ใช้ (Account)</strong> หมายถึง บัญชีเฉพาะที่สร้างขึ้นเพื่อให้คุณเข้าถึงบริการของเรา
              หรือบางส่วนของบริการ
            </li>
            <li>
              <strong>บริษัทในเครือ (Affiliate)</strong> หมายถึง นิติบุคคลที่ควบคุม ถูกควบคุม
              หรืออยู่ภายใต้การควบคุมร่วมกับอีกฝ่ายหนึ่ง โดยคำว่า "ควบคุม" หมายถึง
              การถือหุ้นหรือสิทธิออกเสียง 50% ขึ้นไป
            </li>
            <li>
              <strong>แอปพลิเคชัน (Application)</strong> หมายถึง Andaman Tracking
              ซึ่งเป็นซอฟต์แวร์ที่จัดให้โดยบริษัท
            </li>
            <li>
              <strong>บริษัท (Company)</strong> (เรียกว่า "บริษัท" "เรา" "พวกเรา" หรือ "ของเรา")
              หมายถึง Andaman Tracking.Co.Ltd, 55 137 หมู่ 8 Si Sunthon, Thalang District,
              Phuket 83110
            </li>
            <li>
              <strong>ประเทศ (Country)</strong> หมายถึง ประเทศไทย
            </li>
            <li>
              <strong>อุปกรณ์ (Device)</strong> หมายถึง อุปกรณ์ใดๆ ที่สามารถเข้าถึงบริการได้
              เช่น คอมพิวเตอร์ โทรศัพท์มือถือ หรือแท็บเล็ตดิจิทัล
            </li>
            <li>
              <strong>ข้อมูลส่วนบุคคล (Personal Data)</strong> หมายถึง
              ข้อมูลใดๆ ที่เกี่ยวข้องกับบุคคลที่สามารถระบุตัวตนได้
            </li>
            <li>
              <strong>บริการ (Service)</strong> หมายถึง แอปพลิเคชัน
            </li>
            <li>
              <strong>ผู้ให้บริการ (Service Provider)</strong> หมายถึง บุคคลธรรมดาหรือนิติบุคคลใดๆ
              ที่ประมวลผลข้อมูลในนามของบริษัท รวมถึงบริษัทหรือบุคคลภายนอก
              ที่บริษัทว่าจ้างเพื่อสนับสนุนบริการ
            </li>
            <li>
              <strong>ข้อมูลการใช้งาน (Usage Data)</strong> หมายถึง
              ข้อมูลที่ถูกรวบรวมโดยอัตโนมัติจากการใช้บริการหรือโครงสร้างพื้นฐานของบริการ
            </li>
            <li>
              <strong>คุณ (You)</strong> หมายถึง บุคคลที่เข้าถึงหรือใช้บริการ
              หรือบริษัท/นิติบุคคลที่บุคคลนั้นกระทำการแทน ตามความเหมาะสม
            </li>
          </ul>
        </Section>

        <Section title="การเก็บรวบรวมและการใช้ข้อมูลส่วนบุคคลของคุณ">
          <h3 className="text-base font-semibold text-foreground sm:text-lg">ประเภทของข้อมูลที่เก็บรวบรวม</h3>
          <h4 className="pt-1 text-sm font-semibold text-foreground sm:text-base">ข้อมูลส่วนบุคคล</h4>
          <p>
            ขณะใช้บริการของเรา เราอาจขอให้คุณให้ข้อมูลที่สามารถระบุตัวตนได้
            ซึ่งอาจใช้เพื่อติดต่อหรือระบุตัวตนของคุณ ได้แก่:
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>อีเมล</li>
            <li>ชื่อและนามสกุล</li>
            <li>หมายเลขโทรศัพท์</li>
            <li>ข้อมูลการใช้งาน</li>
          </ul>

          <h4 className="pt-2 text-sm font-semibold text-foreground sm:text-base">ข้อมูลการใช้งาน</h4>
          <p>
            ข้อมูลการใช้งานจะถูกรวบรวมโดยอัตโนมัติเมื่อมีการใช้บริการ เช่น
            ที่อยู่ IP ประเภทเบราว์เซอร์ เวอร์ชันเบราว์เซอร์ หน้าที่เข้าชม วันและเวลาในการเข้าชม
            ระยะเวลาที่ใช้งาน และตัวระบุอุปกรณ์ที่ไม่ซ้ำกัน
          </p>
          <p>
            เมื่อคุณเข้าถึงบริการผ่านอุปกรณ์เคลื่อนที่ เราอาจเก็บข้อมูลเพิ่มเติม เช่น
            ประเภทอุปกรณ์เคลื่อนที่ รหัสอุปกรณ์ ที่อยู่ IP ระบบปฏิบัติการ และข้อมูลวินิจฉัยอื่นๆ
          </p>

          <h4 className="pt-2 text-sm font-semibold text-foreground sm:text-base">
            ข้อมูลที่เก็บขณะใช้แอปพลิเคชัน
          </h4>
          <p>
            เพื่อให้บริการฟีเจอร์ของแอปพลิเคชัน เราอาจเก็บข้อมูลต่อไปนี้โดยได้รับอนุญาตจากคุณล่วงหน้า:
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>ข้อมูลตำแหน่งที่ตั้งของคุณ</li>
          </ul>
          <p>
            เราใช้ข้อมูลดังกล่าวเพื่อให้บริการ ปรับปรุง และปรับแต่งบริการของเรา
            ข้อมูลอาจถูกอัปโหลดไปยังเซิร์ฟเวอร์ของบริษัทหรือผู้ให้บริการ
            หรืออาจถูกจัดเก็บไว้ในอุปกรณ์ของคุณ
          </p>
          <p>
            คุณสามารถเปิดหรือปิดการเข้าถึงข้อมูลนี้ได้ตลอดเวลา ผ่านการตั้งค่าในอุปกรณ์ของคุณ
          </p>
        </Section>

        <Section title="การใช้ข้อมูลส่วนบุคคลของคุณ">
          <p>บริษัทอาจใช้ข้อมูลส่วนบุคคลเพื่อวัตถุประสงค์ดังต่อไปนี้:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>เพื่อให้บริการและดูแลรักษาบริการของเรา</strong>
              รวมถึงติดตามการใช้งานบริการ
            </li>
            <li>
              <strong>เพื่อจัดการบัญชีของคุณ</strong>
              สำหรับการลงทะเบียนและให้คุณเข้าถึงฟังก์ชันต่างๆ ของบริการ
            </li>
            <li>
              <strong>เพื่อการปฏิบัติตามสัญญา</strong>
              ในการพัฒนาและดำเนินการตามสัญญาการซื้อสินค้าหรือบริการที่คุณทำกับเรา
            </li>
            <li>
              <strong>เพื่อติดต่อคุณ</strong> ผ่านอีเมล โทรศัพท์ SMS หรือการสื่อสารอิเล็กทรอนิกส์อื่นๆ
              เช่น การแจ้งเตือนในแอปเกี่ยวกับการอัปเดตหรือความปลอดภัย
            </li>
            <li>
              <strong>เพื่อส่งข่าวสารและข้อเสนอ</strong>
              เกี่ยวกับสินค้า บริการ หรือกิจกรรมที่เกี่ยวข้อง เว้นแต่คุณเลือกไม่รับข้อมูลดังกล่าว
            </li>
            <li>
              <strong>เพื่อจัดการคำขอของคุณ</strong>
              ในการรับเรื่องและตอบกลับคำขอที่คุณส่งถึงเรา
            </li>
          </ul>
        </Section>

        <Section title="Privacy Policy (English)">
          <p>
            This Privacy Policy describes Our policies and procedures on the collection, use and
            disclosure of Your information when You use the Service and tells You about Your privacy
            rights and how the law protects You.
          </p>
          <p>
            We use Your Personal data to provide and improve the Service. By using the Service, You
            agree to the collection and use of information in accordance with this Privacy Policy.
          </p>
          <h3 className="pt-2 text-base font-semibold text-foreground sm:text-lg">
            Interpretation and Definitions
          </h3>
          <p>
            The words of which the initial letter is capitalized have meanings defined under the
            following conditions. The following definitions shall have the same meaning regardless
            of whether they appear in singular or in plural.
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              <strong>Account:</strong> a unique account created for You to access our Service or
              parts of our Service.
            </li>
            <li>
              <strong>Affiliate:</strong> an entity that controls, is controlled by or is under
              common control with a party, where "control" means ownership of 50% or more.
            </li>
            <li>
              <strong>Application:</strong> Andaman Tracking, the software program provided by the
              Company.
            </li>
            <li>
              <strong>Company:</strong> Andaman Tracking.Co.Ltd, 55 137 หมู่ 8 Si Sunthon, Thalang
              District, Phuket 83110.
            </li>
            <li>
              <strong>Country:</strong> Thailand.
            </li>
            <li>
              <strong>Device:</strong> any device that can access the Service.
            </li>
            <li>
              <strong>Personal Data:</strong> any information that relates to an identified or
              identifiable individual.
            </li>
            <li>
              <strong>Service:</strong> the Application.
            </li>
            <li>
              <strong>Service Provider:</strong> any natural or legal person who processes data on
              behalf of the Company.
            </li>
            <li>
              <strong>Usage Data:</strong> data collected automatically from Service use.
            </li>
            <li>
              <strong>You:</strong> the individual or legal entity accessing or using the Service.
            </li>
          </ul>
        </Section>
      </main>
    </div>
  );
}
