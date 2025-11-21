import { useState } from "react";
import { CheckCircle, TrendingUp, Star } from "lucide-react";
import indXSa from "./assets/images/ind-x-sa.jpeg";

export default function FeatureSection() {
  const [lang, setLang] = useState("en"); // "en" or "ar"

  const content = {
    en: [
      {
        id: 1,
        text: `With over 9 years of proven experience in the recruitment industry, we stand as pioneers in delivering organized, efficient, and reliable manpower solutions across India. Over the years, we have proudly served as preferred recruitment partners to multinational companies and leading Indian organizations, earning a strong reputation for excellence, trust, and professionalism.`,
      },
      {
        id: 2,
        text: `Our extensive industry knowledge and strong network enable us to understand the evolving demands of today’s competitive marketplace. We believe that people are the foundation of every successful organization, and we are committed to providing the right talent to support long-term growth and operational stability.`,
      },
      {
        id: 3,
        text: `We look forward to partnering with your organization and are confident in our ability to meet your recruitment needs with efficiency, integrity, and the highest standards of service.`,
      },
    ],

    ar: [
      {
        id: 1,
        text: `بخبرة تمتد لأكثر من 9 سنوات في مجال التوظيف، نبرز كروّاد في تقديم حلول توظيف منظمة وفعّالة وموثوقة في مختلف أنحاء الهند. وعلى مرّ السنوات، عملنا كشريك توظيف مفضّل للشركات متعددة الجنسيات والمؤسسات الهندية الرائدة، مما منحنا سمعة قوية قائمة على التميز والثقة والاحترافية.`,
      },
      {
        id: 2,
        text: `تُمكّننا معرفتنا العميقة بالصناعة وشبكتنا الواسعة من فهم المتطلبات المتغيّرة لسوق العمل التنافسي اليوم. نحن نؤمن بأن الأشخاص هم الأساس الحقيقي لنجاح أي مؤسسة، ونحن ملتزمون بتوفير الكفاءات المناسبة لدعم النمو المستدام والاستقرار التشغيلي على المدى الطويل.`,
      },
      {
        id: 3,
        text: `نتطلّع إلى أن نكون شريككم القادم، ونثق بقدرتنا على تلبية احتياجاتكم في مجال التوظيف بكفاءة ونزاهة وبأعلى معايير الجودة والخدمة.`,
      },
    ],
  };


  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-8 items-start lg:items-center">
        {/* Left: image + badge */}
        <div className="space-y-6">
          <div className="relative overflow-visible">
            <img
              src={indXSa}
              alt="Professional Team"
              className="rounded-3xl shadow-2xl w-full object-cover transform hover:scale-105 transition duration-500"
            />

            <div
              className="
                absolute
                -bottom-6
                right-4
                md:-right-6
                bg-gradient-to-r from-orange-600 to-green-700 text-white
                p-2 md:p-6 rounded-2xl shadow-2xl
                text-center
                w-28 md:w-auto
              "
              style={{ transformOrigin: "right" }}
            >
              <p className="text-lg md:text-4xl md:font-bold">9+</p>
              <p className="text-xs md:text-sm md:font-semibold">Years Legacy</p>
            </div>
          </div>
        </div>

        {/* Right: toggle (above cards) + cards */}
        <div className="space-y-4">
          {/* Toggle placed inside right column so it's always right above the cards */}
          <div className="flex justify-end md:justify-end lg:justify-end">
            <div className="inline-flex rounded-full p-1 bg-gray-100">
              {/* EN button: orange themed to match your orange accents */}
              <button
                onClick={() => setLang("en")}
                className={`px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2 transition
                  ${lang === "en"
                    ? "bg-white shadow-sm text-orange-700 ring-1 ring-orange-200"
                    : "text-gray-600 hover:bg-white/60"}
                `}
                aria-pressed={lang === "en"}
                aria-label="English"
              >
                <span className="hidden sm:inline">EN</span>
                <span className="sm:hidden">Eng</span>
              </button>

              {/* AR button: green themed to match your green accents */}
              <button
                onClick={() => setLang("ar")}
                className={`px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2 transition
                  ${lang === "ar"
                    ? "bg-white shadow-sm text-green-700 ring-1 ring-green-200"
                    : "text-gray-600 hover:bg-white/60"}
                `}
                aria-pressed={lang === "ar"}
                aria-label="Arabic"
              >
                <span className="hidden sm:inline">ع</span>
                <span className="sm:hidden">ع</span>
              </button>
            </div>
          </div>

          {/* Cards */}
          <div className="space-y-4">
            {content[lang].map((item, idx) => {
              const cardStyles = [
                "bg-gradient-to-br from-orange-50 to-orange-100 border-l-8 border-orange-600",
                "bg-gradient-to-br from-green-50 to-emerald-100 border-l-8 border-green-700",
                "bg-gradient-to-br from-yellow-50 to-orange-100 border-l-8 border-yellow-600",
              ];
              const Icon = [CheckCircle, TrendingUp, Star][idx];

              return (
                <div
                  key={item.id}
                  className={`${cardStyles[idx]} p-4 md:p-6 lg:p-8 rounded-2xl shadow-xl transform transition`}
                >
                  <div
                    className={`flex items-start gap-3 ${lang === "ar" ? "flex-row-reverse space-x-reverse" : ""}`}
                    dir={lang === "ar" ? "rtl" : "ltr"}
                  >
                    <Icon className="w-7 h-7 md:w-8 md:h-8 text-current flex-shrink-0" />
                    <p
                      className={`leading-relaxed ${lang === "ar" ? "text-right" : "text-left"} text-base md:text-lg text-gray-800`}
                    >
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
