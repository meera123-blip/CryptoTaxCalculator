import React, { useState } from "react";

const sections = [
  {
    id: "1",
    title: "1.How are cryptocurrencies taxed in Australia?",
    description:
      "The Australian Taxation Office (ATO) regards cryptocurrency as both property, which is subject to Capital Gains Tax (CGT), and income, which is subject to Income Tax. CGT applies when you sell, trade, gift, or make purchases using cryptocurrency. On the other hand, Income Tax applies when you receive cryptocurrency as payment for services, work, mining, staking, or other activities. To simplify tax calculations, consider using a free crypto tax calculator for Australia.",
  },
  {
    id: "2",
    title: "2. What’s the difference between long-term and short-term capital gains?",
    description:
      "The distinction between long-term and short-term capital gains lies in the duration of ownership. When you own an asset, such as cryptocurrency, for more than 12 months, any gains from its sale are categorised as long-term. These long-term gains often receive a 50% discount on the capital gains tax (CGT). In contrast, if you hold the asset for 12 months or less, the gains are considered short-term, and they are taxed at your regular income tax rate.",
  },
  {
    id: "3",
    title: "3.Do I have to pay tax on crypto-to-crypto transactions?",
    description:
      "Yes, according to the ATO, when you trade one cryptocurrency for another, like NFTs, stablecoins, or tokens, it's seen as selling one asset to buy another, and any profit you make from this exchange is subject to Capital Gains Tax. To compute taxes for crypto-to-crypto transactions, you must determine the fair market value of your coins in AUD at both the acquisition and disposal times. However, this can be challenging because many exchanges use cryptocurrency as the standard for valuation.",
  },
  {
    id: "4",
    title: "4. Can the ATO track crypto?",
    description:
      "The Australian Taxation Office (ATO) possesses strong tracking capabilities for cryptocurrency transactions. Since 2014, they've been gathering data on crypto activities, including KYC info from exchanges and wallets. The ATO's data matching program, active since 2019, lets them access data from service providers like Binance and CoinJar, covering personal details and transaction specifics. Since 2020, the ATO has been notifying Australian crypto investors to report holdings to avoid penalties.",
  },
  {
    id: "5",
    title: "5.What is the best crypto tax calculator for Australia?",
    description:
      "KoinX is a crypto tax platform that makes it easy to calculate tax on crypto transactions. It also provides portfolio insights of all crypto exchange accounts combined, making it a valuable tool for chartered accountants and VDA Investors alike.",
  },

  {
    id: "6",
    title: "6. Do I have to pay tax if I lose money trading crypto?",
    description:
      "In Australia, when your cryptocurrency loses value, it's classified as a capital loss. This means you won't have to pay taxes on that loss. It's a way to offset any gains you might have made in other investments for tax purposes.",
  },

];

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className={`p-4 m-4 ${isVisible ? "" : "border border-gray-300"}`}>
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">{title}</h3>
        {isVisible ? (
          <button
            className="cursor-pointer w-4 text-black font-bold"
            onClick={() => {
              setIsVisible(false);
            }}
          >
            -
          </button>
        ) : (
          <button
            className="cursor-pointer w-4  text-black-500"
            onClick={() => {
              setIsVisible(true);
            }}
          >
            +
          </button>
        )}
      </div>
      {isVisible && <p className="mt-2">{description}</p>}
    </div>
  );
};

const Faq = () => {
  const [visibleSection, setVisibleSection] = useState("");

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white mt-6 rounded-lg h-auto pb-3">
      <h1 className=" align-middle items-center text-2xl font-bold p-5">Frequently Asked Question</h1>
      {sections.map((section) => (
        <Section
          key={section.id}
          title={section.title}
          description={section.description}
          isVisible={visibleSection === section.id}
          setIsVisible={() =>
            setVisibleSection((prev) => (prev === section.id ? "" : section.id))
          }
        />
      ))}
    </div>
  );
};

export default Faq;
