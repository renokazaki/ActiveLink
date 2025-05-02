"use client";

import React from "react";
import { Edit, X } from "lucide-react";
import { ActivityDetail } from "types/type";
import { Button } from "@/_components/shadcn_ui/button";

interface ActivityDetailsListProps {
  selectedDate: string;
  selectedActivityDetails: ActivityDetail[];
  onEditDetail: (detail: ActivityDetail) => void;
  onDeleteDetail: (id: string) => void;
  onAddNew: () => void;
  onClose: () => void;
}

export default function ActivityDetailsList({
  selectedDate,
  selectedActivityDetails,
  onEditDetail,
  onDeleteDetail,
  onAddNew,
  onClose,
}: ActivityDetailsListProps) {
  return (
    <div className="bg-slate-800/90 border border-slate-600 p-4 rounded-lg shadow-lg text-white mb-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">{selectedDate} の活動</h3>
        <Button 
          onClick={onClose}
          className="text-slate-400 hover:text-white"
        >
          <X size={25} />
        </Button>
      </div>

      {selectedActivityDetails.length > 0 ? (
        <div className="space-y-4">
          {selectedActivityDetails.map((detail) => (
            <div
              key={detail.id}
              className="bg-slate-700/50 p-3 rounded-md"
            >
              <div className="flex justify-between items-center">
                <h4 className="font-medium">
                  {detail.category || "未分類"}
                </h4>
                <div className="flex space-x-2">
                  <Button
                    onClick={() => onEditDetail(detail)}
                    className="text-blue-400 hover:text-blue-300"
                  >
                    <Edit size={20} />
                  </Button>
                  <Button
                    onClick={() => onDeleteDetail(detail.id.toString())}
                    className="text-red-400 hover:text-red-300"
                  >
                    <X size={20} />
                  </Button>
                </div>
              </div>
              <p className="text-sm text-slate-300 mt-1">
                {detail.description}
              </p>
              <p className="text-sm text-slate-400 mt-2">
                {detail.duration_minutes}分
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-slate-400">この日の活動詳細はありません</p>
      )}

      <Button
        onClick={onAddNew}
        className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white"
      >
        活動詳細を追加
      </Button>
    </div>
  );
}