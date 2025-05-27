const roleTranslations = {
  admin: "Адміністратор",
  teacher: "Викладач",
  student: "Студент",
};

export const formatRoles = (roles) => {
  if (!Array.isArray(roles)) return [];

  return roles.map((role) => {
    if (typeof role !== "string") return role;

    const cleanRole = role.replace(/^ROLE_/, "").toLowerCase();

    return roleTranslations[cleanRole] || cleanRole;
  });
};

export const getMainRole = (roles) => {
  const formatted = formatRoles(roles);

  const teacherIndex = formatted.findIndex((r) => r === "Викладач");
  if (teacherIndex !== -1) return formatted[teacherIndex];

  return formatted[0] || "Користувач";
};
