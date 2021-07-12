import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";

function Header() {
    return (
        <div className="flex items-center top-0 z-50 px-4 py-2 shadow-md bg-white ">
            <Button
                color="gray"
                buttonType="outline"
                rounded={true}
                iconOnly={true}
                ripple="dark"
                className="md:inline-flex h-20 w-20 border-0"
            >

                <Icon name="menu" size="3xl" /> 
            </Button>

            <Icon name="description" size="5xl" color="blue" /> 
            <h1 className="md:inline-flex ml-2 text-gray-700">
                Docs
            </h1>

            <div className="mx-5 md:mx-20 flex flex-grow items-center px-5 py-2 bg-gray-100 text=gray-600 rounded-lg focus-within:text-gray-600 focus-within:shadow-md">
                <Icon name="search" size="3xl" color="gray" />
                <input type="text" placeholder="Search" className="flex-grow px-5 text-base bg-transparent outline-none" />
            </div>

            <Button
                color="gray"
                buttonType="outline"
                rounded={true}
                iconOnly={true}
                ripple="dark"
                className="md:ml-20 ml-5 h-20 w-20 border-0"
            >

                <Icon name="apps" size="3xl" /> 
            </Button>

            <img
                loading="lazy"
                className="cursor-pointer h-12 w-12 rounded-full ml-2"
                src="https://media-exp3.licdn.com/dms/image/C4D03AQGEL2j1GwBl5Q/profile-displayphoto-shrink_200_200/0/1587811400631?e=1631750400&v=beta&t=JbZgE3OIPPpkp9wwT-8wwp4S3rY2B12t8YBN2gQwrPQ"
            />
        </div>
    )
}

export default Header
