"use client";

import { CreateChannelModal } from "@/features/channels/components/create-channel-model";
import { CreateWorkspaceModel } from "@/features/workspaces/components/create-workspace-model";
import { useEffect, useState } from "react";

export const Models = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <CreateChannelModal />
      <CreateWorkspaceModel />
    </>
  );
};
