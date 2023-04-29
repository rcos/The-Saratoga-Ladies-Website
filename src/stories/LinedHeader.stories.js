import LinedHeader from "@/common/components/ui/lined-header";
import { SectionOneHeader } from "@/assets/text/homepage";
import { nanoid } from 'nanoid'


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
        <div key={nanoid()}  >Top of all Children</div>,
        <div key={nanoid()}  >String</div>,
        <div key={nanoid()}  >String</div>,
        <div key={nanoid()}  >String</div>,
        <div key={nanoid()}  >Bottom of all Children</div>
    ]
}