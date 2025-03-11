const AboutUs = () => {
    return (
      <div id="aboutus" className="p-6 sm:p-10 md:p-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          <div>
            <h1 className="md:text-5xl text-3xl  font-bold underline text-[#CC5F00] mb-4 sm:mb-6 text-left relative">
              About Us
            </h1>
            <p className=" md:mt-16 lg:text-xl font-medium text-center tracking-wide md:text-left mb-4 sm:mb-6 lg:mb-16">
              In today’s fast-moving world,{" "}
              <strong>Artificial Intelligence (AI)</strong> and{" "}
              <strong>Machine Learning (ML)</strong> models and systems are
              everywhere. Computer Vision, Image Processing, and Machine
              Intelligence are witnessing rapid advancements that have helped
              industry and society.
            </p>
  
            <p className="lg:text-xl font-medium text-center tracking-wide md:text-left mb-4 sm:mb-6 lg:mb-16">
              The 4th International Conference on Computer Vision & Machine
              Intelligence (CVMI-2025) is being organized by the Electronics &
              Communication Engineering Department at{" "}
              <strong>NIT Rourkela from October 12-13, 2025.</strong>
            </p>
  
            <p className="lg:text-xl font-medium text-center tracking-wide md:text-left mb-4 sm:mb-6 lg:mb-16">
              The worldwide leading research labs, including the Applied AI
              Research Lab, University of South Dakota, USA, and the Computer
              Vision Laboratory, University of Ljubljana, Slovenia, have agreed to
              support CVMI-2025 as organizing knowledge partners.
            </p>
  
            <p className="lg:text-xl font-medium text-center tracking-wide md:text-left lg:mb-16">
              The 1st CVMI in 2022 & 3rd CVMI in 2024 were organized by IIIT
              Allahabad, while the 2nd CVMI 2023 was organized by ABV-IIITM
              Gwalior. The conference program will include{" "}
              <strong>
                regular paper and poster presentations, and a PhD symposium along
                with keynote talks by eminent academics and industry experts in
                the field.
              </strong>
            </p>
          </div>
  
          <div className="flex flex-col items-center gap-4 lg:mt-20 md:mt-24">
            <img
              src="./image 7.png"
              alt="Conference Venue 1"
              className="rounded-lg shadow-lg w-full sm:h-56 lg:h-64 object-cover"
            />
            <img
              src="/image 3.png"
              alt="Conference Venue 2"
              className="rounded-lg shadow-lg w-full sm:h-56 lg:h-64 object-cover"
            />
            <img
              src="/image 8.png"
              alt="Conference Venue 3"
              className="rounded-lg shadow-lg w-full sm:h-56 lg:h-64 object-cover"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default AboutUs;
  