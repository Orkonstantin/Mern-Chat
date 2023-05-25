const ToggleButton = ({ isRegisterMode, onToggle }) => (
    <p className="text-center">
        {isRegisterMode ? (
            <>
                Already a member?{" "}
                <button className="text-blue-500 underline" onClick={onToggle}>
                    Login here
                </button>
            </>
        ) : (
            <>
                Don't have an account?{" "}
                <button className="text-blue-500 underline" onClick={onToggle}>
                    Register
                </button>
            </>
        )}
    </p>
);

export default ToggleButton;
