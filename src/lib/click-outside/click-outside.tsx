import React, { useRef, useEffect, type MouseEvent } from "react";
import hasParent from "./has-parent";

interface ClickOutsideProps {
	active?: boolean;
	onClick?: (e?: MouseEvent) => void;
	children: any;
}

export const ClickOutside = ({ active = true, onClick, children }: ClickOutsideProps) => {
	const innerRef = useRef();

	const handleClick = (event: any) => {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
		if (!hasParent(event.target, innerRef?.current)) {
			if (typeof onClick === "function") {
				// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
				onClick(event);
			}
		}
	};

	useEffect(() => {
		if (active) {
			document.addEventListener("mousedown", handleClick);
			document.addEventListener("touchstart", handleClick);
		}

		return () => {
			if (active) {
				document.removeEventListener("mousedown", handleClick);
				document.removeEventListener("touchstart", handleClick);
			}
		};
	});

	// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
	return React.cloneElement(children, { ref: innerRef });
};
