import { useLanguage } from "@/context/LanguageContext"

export default function Readme() {
  const { dictionary } = useLanguage()
  return (
    <div className="tab-content" id="content3">
      <div>
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-bold text-primary">
            {dictionary.readme.title}
          </h2>
          <p>{dictionary.readme.description}</p>
        </div>
        <div className="mb-8">
          <h3 className="my-4 text-xl font-bold text-primary">
            {dictionary.readme.offer.title}
          </h3>
          <ul className="list-outside list-disc pl-4">
            <li>
              {dictionary.readme.offer.description1.title}
              <br />
              {dictionary.readme.offer.description1.description}
            </li>
            <li>
              {dictionary.readme.offer.description2.title}
              <br />
              {dictionary.readme.offer.description2.description}
            </li>
            <li>
              {dictionary.readme.offer.description3.title}
              <br />
              {dictionary.readme.offer.description3.description}
            </li>
          </ul>
        </div>
        <div className="mb-8">
          <h3 className="my-4 text-xl font-bold text-primary">
            {dictionary.readme.why_work_with_me.title}
          </h3>
          <ul className="list-outside list-disc pl-4">
            <li>{dictionary.readme.why_work_with_me.description}</li>
            <li>{dictionary.readme.why_work_with_me.description2}</li>
            <li>{dictionary.readme.why_work_with_me.description3}</li>
            <li>{dictionary.readme.why_work_with_me.description4}</li>
          </ul>
        </div>
        <h3 className="my-4 mt-4 border-t border-t-gray-600 pt-4 text-center text-lg font-bold text-primary">
          {dictionary.readme.contact_me}
        </h3>
      </div>
    </div>
  )
}
