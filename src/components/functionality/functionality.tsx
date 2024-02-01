import Button from "../../ui/button";

const items = [
  "../../../src/assets/items/one.svg",
  "../../../src/assets/items/two.svg",
  "../../../src/assets/items/three.svg",
  "../../../src/assets/items/four.svg",
  "../../../src/assets/items/five.svg",
];

const colors = [
  {
    heading: "Accent Color",
    hexcode: "FF9898",
    color: "#FF9898",
  },
  {
    heading: "Text Color",
    hexcode: "571010",
    color: "#571010",
  },
  {
    heading: "Background Color",
    hexcode: "FFEAEA",
    color: "#FFEAEA",
  },
];

const Functionality = () => {
  return (
    <div className="bg-[#f4f0ed] py-10 px-20 2xl:px-64">
      <h2 className="text-2xl font-semibold text-gray-600">
        Discover The Heart Of Our Functionality
      </h2>

      {/* cards  */}
      <div className="flex justify-center gap-5 text-gray-600 py-8">
        {/* card One  */}
        <div className="w-1/3 h-[450px] flex flex-col justify-evenly bg-white border border-gray-300 rounded-lg px-3">
          <h2 className="font-semibold text-sm">
            Elevate Your Brand Aesthetics with Custom Tracking Page Styles
          </h2>

          <p className="text-sm">
            Immerse your customers in a branded experience by personalizing the
            colors on your tracking page.
          </p>

          <div>
            {colors.map((item) => (
              <div key={item.heading} className="">
                <h2>{item.heading}</h2>
                <div className="my-2 flex justify-between gap-4">
                  <h2 className="border border-gray-400 rounded-md w-full py-1 px-3 text-sm">
                    {item.hexcode}
                  </h2>
                  <p
                    className={`h-8 w-20 rounded-md round bg-[${item.color}]`}
                    style={{ backgroundColor: `${item.color}` }}
                  ></p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-3">
            <Button
              text="Preview"
              customClass="bg-white text-black font-medium"
            />
            <Button
              text="Apply Changes"
              customClass="bg-[#414141] text-white"
            />
          </div>
        </div>

        {/* card Two  */}
        <div className="w-1/2 h-[450px] flex flex-col justify-between">
          {/* one  */}
          <div className="bg-white flex flex-col justify-evenly items-start border border-gray-300 rounded-lg px-4  h-[180px]">
            <h2 className="text-sm font-semibold">
              Exclusive Onboarding Support for High-Volume Brands
            </h2>

            <p className="text-sm">
              Unlock personalized guidance! Book a one-on-one onboarding call to
              streamline your experience.
            </p>

            <Button
              text="Schedule A Call"
              customClass="bg-[#414141] text-white"
            />
          </div>

          {/* two  */}
          <div className="bg-white flex flex-col justify-evenly items-start border border-gray-300 rounded-lg px-4  h-[260px]">
            <h2 className="text-sm font-semibold">
              Explore Our Integrated Ecosystem
            </h2>

            <p className="text-sm">
              Discover a variety of popular integrations tailored for your
              convenience.
            </p>

            <div className="flex gap-6">
              {items.map((item) => (
                <img src={item} key={item} />
              ))}
            </div>

            <Button
              text="Explore Integrations"
              customClass="bg-[#414141] text-white"
            />
          </div>
        </div>

        {/* card three  */}
        <div className="w-1/3 flex flex-col justify-evenly bg-white border border-gray-300 rounded-lg px-3 h-[450px]">
          <h2 className="font-semibold text-sm">
            Elevate Your Brand Aesthetics with Custom Tracking Page Styles
          </h2>

          <p className="text-sm">
            Unleash creativity with our Custom HTML feature. Add links, custom
            messages, or any HTML content to elevate the tracking page
            experience for your customers.
          </p>

          <div>
            <h3 className="py-2">HTML Link</h3>
            <textarea
              placeholder="Value"
              rows="6"
              cols="40"
              className="outline-none border border-gray-400 rounded-lg"
            >
              {" "}
            </textarea>
          </div>

          <div className="flex gap-3">
            <Button
              text="Preview"
              customClass="bg-white text-black font-medium"
            />
            <Button
              text="Apply Changes"
              customClass="bg-[#414141] text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Functionality;
