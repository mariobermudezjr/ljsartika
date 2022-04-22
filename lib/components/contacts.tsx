import React, { useMemo } from "react";
import { useTheme, Spacer, Link } from "@zeit-ui/react";
import BLOG from "../../blog.config";
import useConfigs from "../states/config-context";
import Twitter from "./icons/twitter";
import LinkedIn from "./icons/linkedin";
import Medium from './icons/medium'
import Mail from "./icons/mail";
import Sun from "./icons/sun";
import Moon from "./icons/moon";

const Contacts = () => {
  const theme = useTheme();
  const configs: any = useConfigs();
  const isDark = useMemo(() => theme.type === "dark", [theme.type]);
  const email = useMemo(() => {
    if (!BLOG.email) return null;
    return `mailto:${BLOG.email}`;
  }, []);
  const twitter = useMemo(() => {
    if (!BLOG.twitter) return null;
    return `https://twitter.com/${BLOG.twitter}`;
  }, []);
  const linkedin = useMemo(() => {
    if (!BLOG.linkedin) return null;
    return `https://www.linkedin.com/in/${BLOG.linkedin}`;
  }, []);
  const medium = useMemo(() => {
    if (!BLOG.medium) return null;
    return `${BLOG.medium}`;
  }, []);
  const switchTheme = () => {
    const isDark = theme.type === "dark";
    configs.onChange(isDark);
  };

  return (
    <>
      <div className="contacts">
        {isDark && <Sun onClick={switchTheme} />}
        {!isDark && <Moon onClick={switchTheme} />}
        {email && (
          <Link
            aria-label="email"
            rel="noreferrer"
            target="_blank"
            href={email}
          >
            <Mail />
          </Link>
        )}
        
        {twitter && (
          <Link
            aria-label="twitter"
            rel="noreferrer"
            target="_blank"
            href={twitter}
          >
            <Twitter />
          </Link>
        )}
        {linkedin && (
          <Link
            aria-label="linkedin"
            rel="noreferrer"
            target="_blank"
            href={linkedin}
          >
            <LinkedIn />
          </Link>
        )}
         {medium && (
          <Link
            aria-label="medium"
            rel="noreferrer"
            target="_blank"
            href={medium}
          >
            <Medium />
          </Link>
        )}
        <div className="line">
          <Spacer y={0.5} />
        </div>

        <style jsx>
          {`
          .contacts {
            width: fit-content;
            display: flex;
            justify-content: center;
            align-items: center;
            //position: relative;
            padding: 0 ${theme.layout.gapQuarter};
            position: absolute;
            bottom: 2.5rem;
          }

          .contacts :global(svg) {
            cursor: pointer;
            margin: ${theme.layout.gapQuarter} ${theme.layout.gapHalf};
            position: relative;
            z-index: 2;
          }

          .line {
            background-color: ${theme.palette.accents_1};
            position: absolute;
            bottom: 4px;
            top: 4px;
            left: -8px;
            width: 8px;
            z-index: 1;
          }

          @media only screen and (max-width: 767px) {
            .contacts {
              position: absolute;
              bottom: 2.5rem;
              left: 1rem;
            }
          }
        `}
        </style>
      </div>
      <Spacer y={2.5} />
    </>
  );
};

export default Contacts;
