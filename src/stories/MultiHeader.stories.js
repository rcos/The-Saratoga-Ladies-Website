import MultiHeader from "@/common/components/ui/multi-header";
import { SectionTwoSubHeader } from "@/assets/text/homepage";
import { SectionTwoHeader } from "@/assets/text/homepage";

export default {
    title: "Components/MultiHeader",
    component: MultiHeader
}

const Template = args => <MultiHeader {...args}/>

export const Default = Template.bind({})
Default.args = {
    subText: SectionTwoSubHeader,
    children: SectionTwoHeader
}