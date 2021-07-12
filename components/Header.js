import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";

function Header() {
    return (
        <div className="flex items-center">
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
        </div>
    )
}

export default Header
