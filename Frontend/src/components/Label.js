const Label = ({ className, children, ...props }) => (
    <label
        className={`${className} block font-black`}
        {...props}>
        {children}
    </label>
)

export default Label
