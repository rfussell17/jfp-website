// Some CommonJS packages (e.g. react-slick) can resolve their default import to
// the whole module object under Vite. Unwrap it so the real export is used.
export const unwrapDefault = (mod) => (mod && mod.default ? mod.default : mod);
