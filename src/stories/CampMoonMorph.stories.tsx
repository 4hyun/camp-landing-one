import { CampMoonMorph } from "@/prototype/CampMoonMorph"
import { Meta } from "@storybook/react"

const meta: Meta<typeof CampMoonMorph> = {
  title: "Brand Story/Moon Phase",
  component: CampMoonMorph,
  decorators: [
    (Story) => (
      <div className="w-[700px] min-h-[100px] bg-slate-800">
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    ),
  ],
}

export default meta

export const Main = {
  render: () => {
    return <CampMoonMorph></CampMoonMorph>
  },
}
