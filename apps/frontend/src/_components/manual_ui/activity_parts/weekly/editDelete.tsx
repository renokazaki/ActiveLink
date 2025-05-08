import { Button } from "@/_components/shadcn_ui/button"
import { Edit, X } from "lucide-react"
import { deleteWeeklyTarget, updateWeeklyTarget } from "./action";
import { WeeklyTarget } from "types/type";

const EditDelete = ({target}: {target: WeeklyTarget}) => {
  return (
    <div className="flex space-x-2 justify-end">
    <details className="relative">
      <summary className="text-blue-400 hover:text-blue-300 list-none cursor-pointer">
        <Edit size={20} />
      </summary>
      <div className="absolute right-0 top-full mt-2 bg-slate-800 border border-slate-700 rounded-md shadow-lg p-3 z-10 w-80">
        <form action={updateWeeklyTarget} className="space-y-3">
          <input type="hidden" name="id" value={target.id} />
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">
              タイトル
            </label>
            <input
              type="text"
              name="title"
              defaultValue={target.title}
              required
              className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-md text-white text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">
              説明
            </label>
            <textarea
              name="description"
              defaultValue={target.description}
              required
              rows={2}
              className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-md text-white text-sm"
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">
              状態
            </label>
            <select
              name="status"
              defaultValue={target.status}
              className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-md text-white text-sm"
            >
              <option value="pending">未開始</option>
              <option value="started">進行中</option>
              <option value="completed">完了</option>
            </select>
          </div>
          <div className="pt-2 flex justify-end">
            <Button
              type="submit"
              size="sm"
              className="bg-blue-600 hover:bg-blue-500"
            >
              更新
            </Button>
          </div>
        </form>
      </div>
    </details>
    <form action={deleteWeeklyTarget} style={{ display: 'inline' }}>
      <input type="hidden" name="id" value={target.id} />
      <button
        type="submit"
        className="text-red-400 hover:text-red-300"
      >
        <X size={20} />
      </button>
    </form>
  </div>
  )
}

export default EditDelete