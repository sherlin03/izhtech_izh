import * as React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../../utils';

const linkButtonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background',
  {
    variants: {
      variant: {
        default: 'relative px-2 flex items-center justify-center h-8 mt-4 text-sm font-bold text-white rounded bg-indigo-950  border-1 ',
        gradient: ' text-sm text-white rounded bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  rounded-2l',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'w-32 px-2 py-1 text-xs font-bold text-black border-2 border-black rounded bg-transparent',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'underline-offset-4 hover:underline text-primary',
        mild: 'bg-gray-300 text-gray-foreground hover:bg-gray/90 text-white',
      },
      size: {
        default: 'h-9 px-3 rounded-md w-32',
        sm: 'h-8 py-1 px-4 w-32',        
        lg: 'h-11 px-8 rounded-md w-32',
        xs: 'h-7 px-3 rounded-md',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface LinkButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkButtonVariants> {
  asChild?: boolean;
  showArrow?: boolean;
}

const LinkButton = React.forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ className, href, showArrow=true,  variant, size, children, ...props }, ref) => {
    return (
        <a ref={ref} href={href}
        className={cn(linkButtonVariants({ variant, size, className }), 'relative group')}
        
        {...props}
      >
        <span className={cn(`transition-transform duration-300   ${showArrow?' group-hover:-translate-x-3':''}`)}>
          {children}
        </span>
       {showArrow && <ArrowRightIcon
          className="absolute w-4 h-4 transition-opacity duration-300 opacity-0 right-3 group-hover:opacity-100"
        />
       }
      </a>
    );
  },
);

LinkButton.displayName = 'Button';

export { LinkButton, linkButtonVariants };
