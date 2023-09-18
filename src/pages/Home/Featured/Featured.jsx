import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css'

const Featured = () => {
    // Get the current date
    const currentDate = new Date();
    
    // Format the date as "Month Day, Year" (e.g., "Sep 17, 2023")
    const formattedDate = currentDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });

    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle
                subHeading={"Check it out"}
                heading={"Featured Items"}
            ></SectionTitle>

            <div className="md:flex justify-center items-center bg-slate-500
            bg-opacity-40 pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>{formattedDate}</p>
                    <p className="uppercase">Where can I get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, neque excepturi natus vitae minus quidem? Iusto magni eos, error nobis, eligendi dolorum sunt labore repellendus tempora suscipit fugit voluptates libero dolore quibusdam ex officia ipsam doloribus corporis ratione, quasi quae accusantium vitae? Dolorem cum enim quos iusto dicta accusantium eos.</p>
                    <button className="btn btn-outline btn-accent mt-2 border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;
