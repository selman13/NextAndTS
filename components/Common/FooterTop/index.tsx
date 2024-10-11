import {
    FooterSectionOneMenu,
    FooterSectionTwoMenu,
    FooterSectionThreeMenu,
    FooterSectionFourMenu,
    FooterSectionFiveMenu,
  } from "@/Data/Footer";
  
  const footerSections = [
    { title: "HelloFresh", items: FooterSectionOneMenu },
    { title: "Our company", items: FooterSectionTwoMenu },
    { title: "Work with us", items: FooterSectionThreeMenu },
    { title: "Contact us", items: FooterSectionFourMenu },
    { title: "Download our app", items: FooterSectionFiveMenu },
  ];
  
  const FooterTop = () => {
    return (
     <div>
         <div className="container flex justify-center gap-8 my-5">
        {footerSections.map(({ title, items }, index) => (
          <ul key={index}>
            <h4>{title}</h4>
            {items.map(({ id, li }) => (
              <li key={id} className="text-green-900">{li}</li>
            ))}
          </ul>
        ))}
      </div>
     </div>
    );
  };
  
  export default FooterTop;
  