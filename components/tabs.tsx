import { useState } from "react"
import Projects from "./tabs-sections/projects"
import Readme from "./tabs-sections/readme"
import Skills from "./tabs-sections/about-me"

export default function TabControl() {
  const [activeTab, setActiveTab] = useState("tab1")

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId)
  }

  return (
    <div className="tab-controls">
      <input
        className="tab-radio"
        id="tab1"
        name="tabs"
        type="radio"
        defaultChecked
        onChange={() => handleTabChange("tab1")}
      />
      <input
        className="tab-radio"
        id="tab2"
        name="tabs"
        type="radio"
        onChange={() => handleTabChange("tab2")}
      />
      <input
        className="tab-radio"
        id="tab3"
        name="tabs"
        type="radio"
        onChange={() => handleTabChange("tab3")}
      />
      <div className="sticky top-0 z-10 flex border-b border-gray-600 bg-black">
        <label
          className={`tab-link flex cursor-pointer items-center gap-2 border-r! border-r-gray-600! bg-black px-4 py-2 text-xs text-gray-100 hover:text-primary ${
            activeTab === "tab1" ? "active" : ""
          }`}
          htmlFor="tab1"
        >
          <svg
            fill="none"
            height="16"
            stroke="currentColor"
            viewBox="0 0 24 24"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
          </svg>
          <h2>skills.md</h2>
        </label>
        <label
          className={`tab-link flex cursor-pointer items-center gap-2 border-r! border-r-gray-600! bg-black px-4 py-2 text-xs text-gray-100 hover:text-primary ${
            activeTab === "tab2" ? "active" : ""
          }`}
          htmlFor="tab2"
        >
          <svg
            fill="none"
            height="16"
            stroke="currentColor"
            viewBox="0 0 24 24"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
          </svg>
          <h2>projects.md</h2>
        </label>
        <label
          className={`tab-link flex cursor-pointer items-center gap-2 border-r! border-r-gray-600! bg-black px-4 py-2 text-xs text-gray-100 hover:text-primary ${
            activeTab === "tab3" ? "active" : ""
          }`}
          htmlFor="tab3"
        >
          <svg
            fill="none"
            height="16"
            stroke="currentColor"
            viewBox="0 0 24 24"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
          </svg>
          <h2>README.md</h2>
        </label>
      </div>

      {/* TABS PAGES */}
      <div className="grow overflow-y-auto bg-black p-6">
        {(() => {
          switch (activeTab) {
            case "tab1":
              return <Skills />
            case "tab2":
              return <Projects />
            case "tab3":
              return <Readme />
            default:
              return null
          }
        })()}
      </div>
    </div>
  )
}
