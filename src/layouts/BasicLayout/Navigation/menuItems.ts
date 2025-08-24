import { RemixiconComponentType, RiChat4Line, RiFileList2Line, RiHomeLine, RiListIndefinite, RiMailLine, RiPriceTag3Line, RiStackedView } from "@remixicon/react";

const menuItems: {
    icon: RemixiconComponentType,
    title: string,
    url: string,
}[] = [
    {
        icon: RiHomeLine,
        title: "Home",
        url: "#home",
    },
    {
        icon: RiListIndefinite,
        title: "Works",
        url: "#works",
    },
    {
        icon: RiStackedView,
        title: "Services",
        url: "#services",
    },
    {
        icon: RiFileList2Line,
        title: "Testimonials",
        url: "#testimonial",
    },
    {
        icon: RiPriceTag3Line,
        title: "Pricing",
        url: "#pricing",
    },
    {
        icon: RiChat4Line,
        title: "FAQs",
        url: "#faqs",
    },
    {
        icon: RiMailLine,
        title: "Contact",
        url: "#contact",
    },
]

export default menuItems;