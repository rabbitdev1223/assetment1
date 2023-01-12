const Label = ({ className, children, ...props }) => (
    <label
        className={`${className} block `}
        {...props}>
        {children}
    </label>
)

export default Label
