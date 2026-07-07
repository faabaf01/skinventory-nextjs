import React from 'react'
import { ExpiringSoonProduct, SkincareProduct } from '../types'

type StatusCardProps = {
    products: SkincareProduct[] | ExpiringSoonProduct[],
    title: string,
    color: string
}

const StatusCard = ({ products, title, color }: StatusCardProps) => {
  return (
    <><div className="bg-white border border-stone-200/50 p-4 rounded-2xl flex flex-col justify-between">
            <span className={`text-[10px] uppercase font-bold ${color} tracking-widest`}>
              {title}
            </span>
            <div className="flex items-baseline gap-1.5 mt-2">
              <span className="text-2xl font-serif font-bold text-stone-900">
                {products ? products.length : 0}
              </span>
              <span className="text-[11px] text-stone-400 font-light">
                Products
              </span>
            </div>
          </div>
          </>
  )
}

export default StatusCard