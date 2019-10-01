class CreateJobs < ActiveRecord::Migration[6.0]
  def change
    create_table :jobs do |t|
      t.string :kind
      t.string :url
      t.string :posted
      t.string :company
      t.string :company_url
      t.string :location
      t.string :title
      t.string :description
      t.string :how_to_apply
      t.string :company_logo

      t.timestamps
    end
  end
end
