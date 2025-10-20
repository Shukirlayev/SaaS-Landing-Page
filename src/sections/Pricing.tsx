import CheckIcon from '@/assets/check.svg';
import { twMerge } from 'tailwind-merge';
import { Button } from '@/components/ui/Button';

const pricingTiers = [
  {
    title: 'Bepul',
    monthlyPrice: 0,
    buttonText: 'Bepul boshlang',
    popular: false,
    inverse: false,
    features: [
      '5 tagacha loyiha a’zolari',
      'Cheksiz vazifalar va loyihalar',
      '2GB xotira',
      'Integratsiyalar mavjud',
      'Asosiy texnik yordam',
    ],
  },
  {
    title: 'Pro',
    monthlyPrice: 9,
    buttonText: 'Hozir obuna bo‘ling',
    popular: true,
    inverse: true,
    features: [
      '50 tagacha loyiha a’zolari',
      'Cheksiz vazifalar va loyihalar',
      '50GB xotira',
      'Integratsiyalar mavjud',
      'Ustuvor texnik yordam',
      'Kengaytirilgan qo‘llab-quvvatlash',
      'Ma’lumotlarni eksport qilish imkoniyati',
    ],
  },
  {
    title: 'Biznes',
    monthlyPrice: 19,
    buttonText: 'Hozir obuna bo‘ling',
    popular: false,
    inverse: false,
    features: [
      'Cheksiz loyiha a’zolari',
      'Cheksiz vazifalar va loyihalar',
      '200GB xotira',
      'Integratsiyalar mavjud',
      'Shaxsiy menejer biriktiriladi',
      'Moslashtirilgan maydonlar',
      'Kengaytirilgan tahlillar',
      'Ma’lumotlarni eksport qilish',
      'API orqali ulanish',
      'Kengaytirilgan xavfsizlik tizimi',
    ],
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-white ">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">Tariflar</h2>
          <p className="section-description mt-5">
            Butunlay bepul. Cheksiz vazifalar, yaxshilangan xavfsizlik va
            eksklyuziv funksiyalar uchun obuna bo‘ling.
          </p>
        </div>
        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center ">
          {pricingTiers.map(
            ({
              title,
              monthlyPrice,
              buttonText,
              popular,
              inverse,
              features,
            }) => (
              <div
                className={twMerge(
                  'card',
                  inverse === true && 'border-black bg-black text-white'
                )}
                key={title}
              >
                <div className="flex justify-between">
                  <h3
                    className={twMerge(
                      'text-lg font-bold text-black/50',
                      inverse === true && 'text-white/60'
                    )}
                  >
                    {title}
                  </h3>
                  {popular === true && (
                    <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                      <span className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] text-transparent bg-clip-text font-medium">
                        Ommabop
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex items-baseline gap-1 mt-[30px]">
                  <span className="text-4xl font-bold tracking-tighter leading-none">
                    ${monthlyPrice}
                  </span>
                  <span className="tracking-tight font-bold text-black/50">
                    /oy
                  </span>
                </div>
                <Button
                  className={twMerge(
                    'w-full mt-[30px]',
                    inverse === true && 'bg-white text-black'
                  )}
                  variant={inverse ? 'secondary' : 'primary'}
                >
                  {buttonText}
                </Button>
                <ul className="flex flex-col gap-5 mt-8">
                  {features.map((feature) => (
                    <li
                      key={feature}
                      className="text-sm flex items-center gap-4"
                    >
                      <CheckIcon className="w-6 h-6" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
