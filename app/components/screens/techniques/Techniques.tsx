import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import { techniques } from "./techniques.data";
import TechniqueItem from "@/components/screens/techniques/TechniqueItem";
import { Text } from "react-native";

const Techniques = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <Layout>
      <Text className="text-3xl mb-7">Techniques</Text>
      {techniques.map((technique) => (
        <TechniqueItem
          key={technique.id}
          title={technique.title}
          path={technique.path}
          description={technique.description}
          isExpanded={expandedId === technique.id}
          onPress={() => toggleExpand(technique.id)}
          showGetStarted={technique.title !== 'Feynman technique'}
        />
      ))}
    </Layout>
  );
};

export default Techniques;
