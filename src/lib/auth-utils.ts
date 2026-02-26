import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { UserRole } from '@/models/user';

/**
 * Hook to protect a component based on allowed user roles.
 * Returns loading state and authorization result.
 */
export function useRoleProtection({ allowedRoles }: { allowedRoles: UserRole[] }) {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthorized, setIsAuthorized] = useState(false);

    useEffect(() => {
        if (status === 'loading') {
            setIsLoading(true);
            return;
        }
        if (!session) {
            // Not logged in, redirect to login page
            router.push('/login');
            setIsLoading(false);
            setIsAuthorized(false);
            return;
        }
        const role = (session.user as unknown as { role: UserRole }).role;
        const authorized = allowedRoles.includes(role);
        setIsAuthorized(authorized);
        setIsLoading(false);
        if (!authorized) {
            // Redirect to unauthorized page or home
            router.push('/unauthorized');
        }
    }, [session, status, allowedRoles, router]);

    return { isLoading, isAuthorized };
}
