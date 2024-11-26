import "./MyLabel.css";

interface Props {
  /**
   * Text to display
   */

  label: string;
  /**
   * Text size
   */
  size?: "normal" | "h1" | "h2" | "h3";
  /**
   * Capitalize letters
   */
  allCaps?: boolean;
  /**
   * Label color
   */
  color?: "text-primary" | "text-secondary" | "text-tertiary";
  /**
   * Font color
   */
  fontColor?: string;
}

/**
 *allCaps : boolean,
 color : 'text-primary' | 'text-secondary' |'text-tertiary'
 fontColor : string, texto de span
 */

export const MyLabel = ({
  label,
  size = "normal",
  allCaps = false,
  color,
  fontColor,
}: Props) => {
  return (
    <span
      className={`${size} ${color} label`}
      style={{ backgroundColor: fontColor }}
    >
      {" "}
      {allCaps ? label.toUpperCase() : label.toLowerCase()}{" "}
    </span>
  );
};
