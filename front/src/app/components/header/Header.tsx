const Header:React.FC = ():React.ReactElement=>{
    return(
        <div className="flex bg-gradient-header h-6 justify-between items-center border-border border-b">
            <h4 className="ml-8 text-base max-sm:text-xs">Free shipping Argentina</h4>
            <h4 className="mr-8 text-base max-sm:text-xs">Mother's Day discounts!</h4>
        </div>
    )
}
export default Header 