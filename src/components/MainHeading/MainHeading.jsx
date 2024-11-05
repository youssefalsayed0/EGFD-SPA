
export default function MainHeading({title , subTitle}) {
  return (
  <>
    <div className="main-heading text-center ">
            <p className="fw-semibold text-secondary">{subTitle}</p>
            <h2 className="position-relative pb-3 ">{title}</h2>
          </div>
          </>
  )
}
