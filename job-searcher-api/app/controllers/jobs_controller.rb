class JobsController < ApplicationController
    
    def index
        job = Job.all
        render json: job
    end

    def create
        
    end
end
