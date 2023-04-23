import Button from "@/common/components/ui/button"
import { FaDownload } from "react-icons/fa"

export default {
    title: "Components/Button",
    component: Button,
}

const Template = args => <Button {...args} />

export const Email = Template.bind({})
Email.args = {
    text: "Email us",
    type: "email",
    shape: "rectangle"
}

export const Download = Template.bind({})
Download.args = {
    shape: "circle",
    type: "download",
    icon: FaDownload
}

export const Default = Template.bind({})
Default.args = {
    text: "Default Button"
}