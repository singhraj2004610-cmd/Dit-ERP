import Std from "./stdInfoCard";

function PlacementReg() {
  return (
    <div>
      <Std />
      <div className="border-blue-400 border-l-3 mx-10 rounded-lg shadow-xl mt-6 p-6 space-y-4">
        <h1 className="flex justify-center text-3xl text-blue-900">
          Campus Placement One-Time Registration & Student Declaration
        </h1>

        <div className="space-y-3">
          <h3 className="text-2xl font-bold">
            Important Instructions – Please Read Carefully
          </h3>

          <p>
            By registering for Campus Placement through this One-Time
            Registration process, I understand and agree to the following terms
            and conditions:
          </p>

          <ol className="list-decimal pl-6 space-y-3">
            <li>
              <span className="font-bold">Mandatory One-Time Registration</span>
              <ul className="list-[circle] pl-6 mt-1 space-y-1">
                <li>
                  This is a one-time registration to participate in all current
                  and future campus placement drives during the applicable
                  academic year.
                </li>
                <li>
                  Failure to complete this registration will make me ineligible
                  to participate in campus placement activities.
                </li>
              </ul>
            </li>

            <li>
              <span className="font-bold">
                Responsibility to Track Placement Drives
              </span>
              <ul className="list-[circle] pl-6 mt-1 space-y-1">
                <li>
                  Placement drive details (company name, eligibility criteria,
                  schedule, venue, and selection process) will be communicated
                  through official channels i.e. iNxt ERP portal and official
                  email communication.
                </li>
                <li>
                  It is my responsibility to regularly check these channels and
                  stay updated.
                </li>
              </ul>
            </li>

            <li>
              <span className="font-bold">Eligibility & Participation</span>
              <ul className="list-[circle] pl-6 mt-1 space-y-1">
                <li>
                  Each placement drive may have specific eligibility criteria.
                  Meeting eligibility criteria does not guarantee selection or
                  interview shortlisting.
                </li>
                <li>Registration does not assure job placement.</li>
              </ul>
            </li>

            <li>
              <span className="font-bold">
                Commitment & Professional Conduct
              </span>
              <ul className="list-[circle] pl-6 mt-1 space-y-1">
                <li>I commit to attend all rounds as scheduled.</li>
                <li>
                  I will maintain professional behaviour, punctuality, and
                  discipline.
                </li>
                <li>
                  I will not withdraw after applying unless permitted by the
                  Placement Cell.
                </li>
              </ul>
            </li>

            <li>
              <span className="font-bold">Accuracy of Information</span>
              <ul className="list-[circle] pl-6 mt-1 space-y-1">
                <li>
                  All academic, personal, and skill-related information provided
                  by me is true and accurate.
                </li>
                <li>
                  Providing false information may lead to disqualification.
                </li>
              </ul>
            </li>

            <li>
              <span className="font-bold">
                Placement Rules & Institutional Policy
              </span>
              <ul className="list-[circle] pl-6 mt-1 space-y-1">
                <li>
                  I agree to abide by the Placement Policy of the institution.
                </li>
                <li>
                  I agree to follow company-specific rules and conditions.
                </li>
                <li>
                  Decisions taken by the Placement Cell shall be final and
                  binding.
                </li>
              </ul>
            </li>

            <li>
              <span className="font-bold">Communication & No-Claim Clause</span>
              <ul className="list-[circle] pl-6 mt-1 space-y-1">
                <li>
                  Missing a drive due to non-checking notifications or late
                  reporting is my responsibility.
                </li>
                <li>
                  I shall not raise any claim or grievance against the
                  institution for such cases.
                </li>
              </ul>
            </li>

            <li>
              <span className="font-bold">
                Mandatory Training & Employability Assessment
              </span>
              <ul className="list-[circle] pl-6 mt-1 space-y-1">
                <li>
                  Participation is subject to mandatory attendance in training
                  programs and employability assessments.
                </li>
                <li>
                  Attendance and performance may be used as eligibility
                  criteria.
                </li>
                <li>
                  Failure to attend may result in restriction or
                  disqualification.
                </li>
              </ul>
            </li>
          </ol>
        </div>

        <div className="">
          {" "}
          <h4 className="text-2xl">Student Declaration: </h4>{" "}
          <span className="m-2">
            I hereby confirm that I have read, understood, and agreed to all the
            above terms and conditions.{" "}
          </span>
          <br />{" "}
          <span className="m-2">
            {" "}
            I voluntarily register for campus placement drives and commit to
            participate responsibly in all applicable placement activities.{" "}
            <br />
          </span>
          <label className="inline-flex items-center gap-2 bg-gray-200 p-3 rounded-lg m-2 cursor-pointer">
            <input type="checkbox" className="h-4 w-4 accent-blue-600" />
            <span>
              I confirm my One-Time Registration for Campus Placement and agree
              to all terms and conditions mentioned above.
            </span>
          </label>
          <br />
          <span className="m-2">
            Note: This Registration is subject to meeting the eligibility
            criteria as defined by the Placement Office.
          </span>
        </div>
      </div>
    </div>
  );
}

export default PlacementReg;
