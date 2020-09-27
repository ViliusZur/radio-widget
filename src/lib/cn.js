// Concats class names
const cn = (...args) => {
	return args.filter(Boolean).join(' ');
};

export default cn;
