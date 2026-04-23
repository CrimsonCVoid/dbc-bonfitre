import type { AnchorHTMLAttributes, ReactNode } from "react";
import { fareHarborItemUrl, type FareHarborItemKey } from "@/lib/site";

type Variant = "primary" | "secondary" | "ghost";

type BookNowButtonProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href" | "children"
> & {
  /** Which FareHarbor item to open. Omit to open the generic item picker. */
  item?: FareHarborItemKey;
  /** Matches the site's existing .btn-* utilities. */
  variant?: Variant;
  /** If true, the button fills its container width. */
  fullWidth?: boolean;
  /** Visible label. */
  children?: ReactNode;
};

/**
 * "Book Now" anchor that the FareHarbor autolightframe script (loaded in
 * app/layout.tsx) intercepts, opening the booking flow in a modal overlay.
 *
 * The autolightframe script finds every anchor with an href matching
 * `fareharbor.com/{shortname}/` and attaches a click handler that opens
 * the URL in an iframe modal. No extra data-* attributes are needed —
 * and `data-fh-flow` in particular is for a DIFFERENT FareHarbor product
 * (Flow) that would cause the click to fall through to native navigation.
 *
 * Without JavaScript this degrades to a plain link to the FareHarbor URL,
 * which is an acceptable fallback.
 */
export function BookNowButton({
  item,
  variant = "primary",
  fullWidth = false,
  className = "",
  children = "Book Now",
  "aria-label": ariaLabel,
  ...rest
}: BookNowButtonProps) {
  const variantClass =
    variant === "secondary"
      ? "btn-secondary"
      : variant === "ghost"
        ? "btn-ghost"
        : "btn-primary";

  const classes = [
    variantClass,
    fullWidth ? "w-full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  // TODO post-launch: fire GA4/Meta conversion event on click (dataLayer push)

  return (
    <a
      href={fareHarborItemUrl(item)}
      aria-label={ariaLabel ?? (typeof children === "string" ? undefined : "Book a beach bonfire")}
      className={classes}
      {...rest}
    >
      {children}
    </a>
  );
}
