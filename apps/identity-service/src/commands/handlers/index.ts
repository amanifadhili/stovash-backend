import { LoginUserHandler } from './login-user.handler.js';
import { CreateUserHandler } from './create-user.handler.js';
import { CreateTenantHandler } from './create-tenant.handler.js';
import { VerifyUserHandler } from './verify-user.handler.js';
import { GetUsersHandler } from './get-users.handler.js';
import { ManagePermissionsHandler } from './permission-management.handler.js';
import { RequestPasswordResetHandler } from './request-password-reset.handler.js';
import { ResetPasswordHandler } from './reset-password.handler.js';
import { HandleGoogleUserCommandHandler } from '../impl/handle-google-user.command.js';
import { CreateSessionCommandHandler } from '../impl/create-session.command.js';
import { GetUserFromSessionCommandHandler } from '../impl/get-user-from-session.command.js';
import { DeleteSessionCommandHandler } from '../impl/delete-session.command.js';
import { CompleteGoogleOnboardingHandler } from '../impl/complete-google-onboarding.command.js';

export const CommandHandlers = [LoginUserHandler, CreateUserHandler, CreateTenantHandler, VerifyUserHandler, GetUsersHandler, ManagePermissionsHandler, RequestPasswordResetHandler, ResetPasswordHandler, HandleGoogleUserCommandHandler, CreateSessionCommandHandler, GetUserFromSessionCommandHandler, DeleteSessionCommandHandler, CompleteGoogleOnboardingHandler];
