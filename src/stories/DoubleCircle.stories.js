import { DoubleCircle } from "@/common/components/ui/doubleCircle/doubleCircle"

export default {
    title: "Components/DoubleCircle",
    component: DoubleCircle,
}

const Template = args => <DoubleCircle {...args} />

export const Example = Template.bind({})
Example.args = {
    circle1size: "m",
    circle2size: "l",
}