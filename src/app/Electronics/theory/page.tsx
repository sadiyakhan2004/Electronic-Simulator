import React from "react";
import ColorCodeTable from "@/components/electronics/ColorCodeTable";

const TheoryPage: React.FC = () => {
  return (
    <div className="relative max-w-[85vw] lg:max-w-[75vw] mx-auto bg-white p-10 rounded-3xl shadow-2xl text-gray-800 space-y-12 overflow-hidden">
    {/* Decorative Background */}
    <div className="absolute inset-0 bg-gradient-to-bl from-purple-300 via-transparent to-blue-500 opacity-20 blur-2xl pointer-events-none"></div>
  
    {/* Page Title */}
    <h1 className="text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-gray-600 via-gray-600 to-gray-500 text-transparent bg-clip-text">
      Theory: Understanding Resistors
    </h1>

      {/* Section: Types of Resistors */}
      <section className="space-y-10">
        <h2 className="text-3xl font-bold border-b-4 border-blue-400 pb-3">
          Types of Resistors
        </h2>
        <figure className="block mx-auto group">
          <img
            src="https://be-iitkgp.vlabs.ac.in/exp/familiarisation-resistor/images/fig1.png"
            alt="Resistors"
            className="mx-auto max-w-full rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300"
          />
          <figcaption className="text-center mt-4 text-gray-500 italic">
            Figure 1: Various types of resistors
          </figcaption>
        </figure>
        <p className="text-xl leading-relaxed text-justify bg-blue-50 p-6 rounded-md shadow-sm">
          Resistors come in various types depending on their material,
          tolerance, and application.
        </p>

        <div className="space-y-8">
          <div className="p-6 bg-gradient-to-r from-blue-50 via-white to-blue-100 rounded-xl shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
            <h3 className="text-2xl font-semibold mb-4">
              <strong>Carbon Film Resistors:</strong>
            </h3>
            <p>
              Cheap and general-purpose, with ±5% tolerance and power ratings
              like 1/8 W, 1/4 W, and 1/2 W. However, they tend to be
              electrically noisy.
            </p>
            <figure className="mt-4">
              <img
                src="https://be-iitkgp.vlabs.ac.in/exp/familiarisation-resistor/images/fig10.png"
                alt="Carbon Film Resistors"
                className="mx-auto max-w-sm rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
              />
              <figcaption className="text-center mt-2 text-gray-500 italic">
                Figure 2: Carbon Film Resistor
              </figcaption>
            </figure>
          </div>

          <div className="p-6 bg-gradient-to-r from-purple-50 via-white to-purple-100 rounded-xl shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
            <h3 className="text-2xl font-semibold mb-4">
              <strong>Metal Film Resistors:</strong>
            </h3>
            <p>High-precision resistors with tolerance as low as ±0.05%.</p>
            <figure className="mt-4">
              <img
                src="https://be-iitkgp.vlabs.ac.in/exp/familiarisation-resistor/images/fig11.png"
                alt="Metal Film Resistors"
                className="mx-auto max-w-sm rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
              />
              <figcaption className="text-center mt-2 text-gray-500 italic">
                Figure 3: Metal Film Resistor
              </figcaption>
            </figure>
          </div>

          <div className="p-6 bg-gradient-to-r from-pink-50 via-white to-pink-100 rounded-xl shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
            <h3 className="text-2xl font-semibold mb-4">
              <strong>Wire Wound Resistors:</strong>
            </h3>
            <p>
              Made of metal resistance wire, capable of precise values and high
              wattage.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Reading Value of Resistors */}
      <section className="space-y-10">
        <h2 className="text-3xl font-bold border-b-4 border-blue-400 pb-3">
          Reading Value of Resistors
        </h2>
        <p className="text-lg leading-relaxed">
          Resistors are color-coded because their small size makes it difficult
          to print values directly. There are 4 or 5 bands of color that
          determine the resistor value. Here’s how to decode their values:
        </p>
        <figure className="block mx-auto">
          <img
            src="https://be-iitkgp.vlabs.ac.in/exp/familiarisation-resistor/images/fig2_1.png"
            alt="Color Bands"
            className="mx-auto max-w-full rounded-lg shadow-md"
          />
          <figcaption className="text-center mt-4 text-gray-500 italic">
            Figure 4.1: Resistor color bands
          </figcaption>
        </figure>

        {/* Steps Accordion */}
        <div className="space-y-6">
          {[
            {
              step: "Step 1",
              description:
                "If your resistor has four color bands, turn the resistor so that the gold or silver band is on the right-hand side or the end with more bands should point left.",
              img: "https://be-iitkgp.vlabs.ac.in/exp/familiarisation-resistor/images/fig3.png",
            },
            {
              step: "Step 2",
              description:
                "The first band on the left-hand side represents the first digit. Based on the color, note the digit. For a 4-band resistor, it’s ‘5’; for a 5-band resistor, it’s ‘2’.",
              img: "https://be-iitkgp.vlabs.ac.in/exp/familiarisation-resistor/images/fig4.png",
            },
            {
              step: "Step 3",
              description:
                "The second band represents the second digit. The colors represent the same numbers as did the first digit. In this case, for a 4-band resistor it’s ‘6’, and for a 5-band resistor it’s ‘3’.",
              img: "https://be-iitkgp.vlabs.ac.in/exp/familiarisation-resistor/images/fig5.png",
            },
            {
              step: "Step 4",
              description:
                "The third band represents the multiplier. For a 4-band resistor, it indicates how many zeros to add. In this case, 4 zeros are added, making the value 560K.",
              img: "https://be-iitkgp.vlabs.ac.in/exp/familiarisation-resistor/images/fig6.png",
            },
            {
              step: "Step 5",
              description:
                "For a 5-band resistor, the third band represents the third digit. In this case, it’s ‘7’, making the value 237 Ohms as its multiplier digit is ‘0’.",
              img: "https://be-iitkgp.vlabs.ac.in/exp/familiarisation-resistor/images/fig7.png",
            },
          ].map(({ step, description, img }, index) => (
            <details
              key={index}
              className="group bg-blue-50 px-6 py-4 rounded-lg hover:bg-blue-100 cursor-pointer shadow-md"
            >
              <summary className="text-lg font-semibold text-blue-700">
                {step}
              </summary>
              <div className="mt-4">
                <p>{description}</p>
                <figure className="block mx-auto my-4">
                  <img
                    src={img}
                    alt={step}
                    className="mx-auto max-w-full rounded-lg shadow-md"
                  />
                  <figcaption className="text-center mt-2 text-gray-500 italic">
                    {step}
                  </figcaption>
                </figure>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Section: Tolerance */}
      <section className="space-y-10">
        <h2 className="text-3xl font-bold border-b-4 border-blue-400 pb-3">
          Tolerance
        </h2>
        <ul className="list-disc ml-8 space-y-4">
          <li>
            The last band denotes the tolerance. For a 4-band resistor, it is
            ±10%, while for a 5-band resistor, it is ±1%.
          </li>
          <li>
            Tolerance of a Resistor is also an important property to consider.
          </li>
          <li>
            A 100 ohm resistor with a 10 % tolerance can mean its value can be
            any fixed value between 90 to 110 Ohms.
          </li>
          <li>
            A 120 Ohm resistor with a 10 % tolerance can mean its value can be
            any fixed value between 108 and 132 Ohms.
          </li>
          <li>
            So there is some overlap between 100 Ohm and 120 Ohm resistance in
            terms of its limits.
          </li>
        </ul>
        <figure className="block mx-auto group">
          <img
            src="https://be-iitkgp.vlabs.ac.in/exp/familiarisation-resistor/images/fig8.png"
            alt="Tolerance"
            className="mx-auto max-w-full rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300"
          />
          <figcaption className="text-center mt-4 text-gray-500 italic">
            Figure 8
          </figcaption>
        </figure>
      </section>

      {/* Section: Resistor Color Code Table */}
      <section className="space-y-10 ">
        <h2 className="text-3xl font-bold border-b-4  pb-3">
          Resistor Color Code Table
        </h2>
        <ColorCodeTable />
      </section>

      {/* Section: Mnemonic */}
      <section className="space-y-10">
        <h2 className="text-3xl font-bold border-b-4 border-blue-400 pb-3">
          Mnemonic to Remember
        </h2>
        <div className="p-6  rounded-lg shadow-lg text-gray-800">
          <figure className="block mx-auto">
            <img
              src="https://be-iitkgp.vlabs.ac.in/exp/familiarisation-resistor/images/fig9.png"
              alt="Mnemonic"
              className="mx-auto max-w-full rounded-lg shadow-md"
            />
            <figcaption className="text-center mt-4 text-sm text-gray-500 italic">
              Figure 7: Mnemonic for resistor color codes
            </figcaption>
          </figure>
          <p className="text-lg leading-relaxed mt-6">
            <strong>"BB ROY of Great Britain had a Very Good Wife."</strong>
            Each initial corresponds to a color in the sequence: Black, Brown,
            Red, Orange, Yellow, Green, Blue, Violet, Gray, White.
          </p>
        </div>
      </section>
    </div>
  );
};

export default TheoryPage;
