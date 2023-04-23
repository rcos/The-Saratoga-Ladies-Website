import LinedHeader from "@/common/components/ui/lined-header";
import { SectionOneHeader } from "@/assets/text/homepage";

export default {
    title: "Components/LinedHeader",
    component: LinedHeader,
}

const Template = args => <LinedHeader {...args}/>

export const Default = Template.bind({})
Default.args = {
    children: SectionOneHeader
}

export const MultipleChildren = Template.bind({})
MultipleChildren.args = {
    children: [
        <div>Top of all Children</div>,
        <div>String</div>,
        <div>String</div>,
        <div>String</div>,
        <div>Bottom of all Children</div>
    ]
}