import Header from "@/common/components/ui/header/header.component";

export default {
    title: "Components/Header",
    component: Header
}

const Template = args => <Header {...args} />

export const Default = Template.bind({})
Default.args = {
    
}