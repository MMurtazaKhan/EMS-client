import { LuFacebook, LuLinkedin, LuTwitter } from "react-icons/lu";
import { Link } from "react-router-dom";
import Container from "../container/Container";
import SectionTitle from "../sectionTitle/SectionTitle";
import hassan from '../../assets/team/hassan.jpg';
import anas from '../../assets/team/anas.jpg';
import bushra from '../../assets/team/bushra.png';
import ali from '../../assets/team/ali.jpg';

const TeamCards = () => {
  return (
    <section className="py-10">
      <Container>
        <SectionTitle
          heading={"Our Creative Team"}
          subHeading={"MEET THE TEAM"}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
          {/* single team card  */}
          <div className="relative bg-white shadow-md border rounded-md px-5 py-5">
            <img
              className="w-32 h-32 object-cover rounded-full"
              src={hassan}
              alt=""
            />
            <h3 className="text-dark_01 text-2xl">Hassan Siddiqui</h3>
            <p className="text-gray-500 font-normal py-2">
              I&apos;m proud to be a part of such a talented group of
              individuals
            </p>
            <div className="flex gap-5 py-2">
              <Link
                to="https://www.facebook.com/"
                target="_blank"
              >
                <LuFacebook
                  className="inline text-2xl border border-primary text-amber-700/80 rounded-md p-0.5"
                  size={28}
                  fill="pink"
                />
              </Link>
              <Link to="https://twitter.com" target="_blank">
                <LuTwitter
                  className="inline text-2xl border border-primary text-amber-700/80 rounded-md p-0.5"
                  size={28}
                  fill="pink"
                />
              </Link>
              <Link to="https://www.linkedin.com/" target="_blank">
                <LuLinkedin
                  className="inline text-2xl border border-primary text-amber-700/80 rounded-md p-0.5"
                  size={28}
                  fill="pink"
                />
              </Link>
            </div>
            <div className="absolute top-3 right-3">
              <p className="bg-amber-700/10 text-amber-700/70 px-1 py-1 rounded">
                CEO
              </p>
            </div>
          </div>
          {/* single team card end */}

          {/* single team card  */}
          <div className="relative bg-white shadow-md border rounded-md px-5 py-5">
            <img
              className="w-32 h-32 object-cover rounded-full"
              src={anas}
              alt=""
            />
            <h3 className="text-dark_01 text-2xl">Anas Khan</h3>
            <p className="text-gray-500 font-normal py-2">
              I&apos;m proud to be a part of such a talented group of
              individuals
            </p>
            <div className="flex gap-5 py-2">
              <Link to="https://www.facebook.com/" target="_blank">
                <LuFacebook
                  className="inline text-2xl border border-primary text-amber-700/80 rounded-md p-0.5"
                  size={28}
                  fill="pink"
                />
              </Link>
              <Link to="https://twitter.com" target="_blank">
                <LuTwitter
                  className="inline text-2xl border border-primary text-amber-700/80 rounded-md p-0.5"
                  size={28}
                  fill="pink"
                />
              </Link>
              <Link to="https://www.linkedin.com/" target="_blank">
                <LuLinkedin
                  className="inline text-2xl border border-primary text-amber-700/80 rounded-md p-0.5"
                  size={28}
                  fill="pink"
                />
              </Link>
            </div>
            <div className="absolute top-3 right-3">
              <p className="bg-amber-700/10 text-amber-700/70 px-1 py-1 rounded">
                Manager
              </p>
            </div>
          </div>
          {/* single team card end */}

          {/* single team card  */}
          <div className="relative bg-white shadow-md border rounded-md px-5 py-5">
            <img
              className="w-32 h-32 object-cover rounded-full"
              src={ali}
              alt=""
            />
            <h3 className="text-dark_01 text-2xl">Muhammad Ali</h3>
            <p className="text-gray-500 font-normal py-2">
              I&apos;m proud to be a part of such a talented group of
              individuals
            </p>
            <div className="flex gap-5 py-2">
              <Link to="https://www.facebook.com/" target="_blank">
                <LuFacebook
                  className="inline text-2xl border border-primary text-amber-700/80 rounded-md p-0.5"
                  size={28}
                  fill="pink"
                />
              </Link>
              <Link to="https://twitter.com" target="_blank">
                <LuTwitter
                  className="inline text-2xl border border-primary text-amber-700/80 rounded-md p-0.5"
                  size={28}
                  fill="pink"
                />
              </Link>
              <Link to="https://www.linkedin.com/" target="_blank">
                <LuLinkedin
                  className="inline text-2xl border border-primary text-amber-700/80 rounded-md p-0.5"
                  size={28}
                  fill="pink"
                />
              </Link>
            </div>
            <div className="absolute top-3 right-3">
              <p className="bg-amber-700/10 text-amber-700/70 px-1 py-1 rounded">
                Co-Manager
              </p>
            </div>
          </div>
          {/* single team card end */}

          
          {/* single team card  */}
          <div className="relative bg-white shadow-md border rounded-md px-5 py-5">
            <img
              className="w-32 h-32 object-cover rounded-full"
              src={bushra}
              alt=""
            />
            <h3 className="text-dark_01 text-2xl">Bushra Aziz</h3>
            <p className="text-gray-500 font-normal py-2">
              I&apos;m proud to be a part of such a talented group of
              individuals
            </p>
            <div className="flex gap-5 py-2">
              <Link to="https://www.facebook.com/" target="_blank">
                <LuFacebook
                  className="inline text-2xl border border-primary text-amber-700/80 rounded-md p-0.5"
                  size={28}
                  fill="pink"
                />
              </Link>
              <Link to="https://twitter.com" target="_blank">
                <LuTwitter
                  className="inline text-2xl border border-primary text-amber-700/80 rounded-md p-0.5"
                  size={28}
                  fill="pink"
                />
              </Link>
              <Link to="https://www.linkedin.com/" target="_blank">
                <LuLinkedin
                  className="inline text-2xl border border-primary text-amber-700/80 rounded-md p-0.5"
                  size={28}
                  fill="pink"
                />
              </Link>
            </div>
            <div className="absolute top-3 right-3">
              <p className="bg-amber-700/10 text-amber-700/70 px-1 py-1 rounded">
                Co-Manager
              </p>
            </div>
          </div>
          {/* single team card end */}

          
        </div>
      </Container>
    </section>
  );
};

export default TeamCards;
